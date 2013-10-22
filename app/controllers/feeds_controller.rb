class FeedsController < ApplicationController
  def index
    @feeds = Feed.includes(:entries)

    @feeds.each do |feed|
      feed.reload if feed.updated_at < 2.minutes.ago
    end

    @feeds = @feeds.to_json(include: :entries).html_safe

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @feeds }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end
end
