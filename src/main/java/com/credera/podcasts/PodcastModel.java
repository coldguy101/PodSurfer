package com.credera.podcasts;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Arrays;
import java.util.Date;

/**
 * Created by sean on 2/14/17.
 */

@JsonIgnoreProperties(ignoreUnknown = true)
public class PodcastModel {

    private String _id = "Empty";
    private String name = "Empty";
    private String link = "Empty";
    private Date release;
    private String producer = "Empty";
    private String length = "Empty";
    private String description = "Empty";
    private Object[] episodes;
    private String[] tags;
    private String imageURL = "Empty";

    public String get_id() {
        return _id;
    }

    public void set_id(String id) {
        this._id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Date getRelease() {
        return release;
    }

    public void setRelease(Date release) {
        this.release = release;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public String getLength() {
        return length;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Object[] getEpisodes() {
        return episodes;
    }

    public void setEpisodes(Object[] episodes) {
        this.episodes = episodes;
    }

    public String[] getTags() {
        return tags;
    }

    public void setTags(String[] tags) {
        this.tags = tags;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    @Override
    public String toString() {
        return "PodcastModel{" +
                "name='" + name + '\'' +
                ", link='" + link + '\'' +
                ", release=" + release +
                ", producer='" + producer + '\'' +
                ", length='" + length + '\'' +
                ", description='" + description + '\'' +
                ", episodes=" + Arrays.toString(episodes) +
                ", tags=" + Arrays.toString(tags) +
                ", imageURL='" + imageURL + '\'' +
                '}';
    }
}
