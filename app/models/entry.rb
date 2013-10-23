class Entry < ActiveRecord::Base
  attr_accessible :guid, :link, :published_at, :title, :json, :feed_id, :description

  belongs_to :feed

  def self.create_from_json!(entry_data, feed)
    Entry.create({
      guid: entry_data.guid,
      link: entry_data.link,
      published_at: entry_data.pubDate,
      title: entry_data.title,
      description: entry_data.description,
      json: entry_data,
      feed_id: feed.id
    })
  end
end
