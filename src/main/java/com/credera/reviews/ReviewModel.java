package com.credera.reviews;

import com.credera.podcasts.PodcastModel;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Arrays;
import java.util.Date;

/**
 * Created by Mitchell on 2/19/17.
 */

@JsonIgnoreProperties(ignoreUnknown = true)
public class ReviewModel {

    private String name;
    private int podcastID;
    private int episode;
    private int rating;
    private Boolean spoilers;
    private String review;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPodcast() {
        return podcastID;
    }

    public void setPodcast(int podcast) {
        this.podcastID = podcast;
    }

    public Integer getEpisode() {
        return episode;
    }

    public void setEpisode(Integer episode) {
        this.episode = episode;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Boolean getSpoilers() {
        return spoilers;
    }

    public void setSpoilers(Boolean spoilers) {
        this.spoilers = spoilers;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    @Override
    public String toString() {
        return "ReviewModel{" +
                "name='" + name + '\'' +
                ", podcast=" + podcastID +
                ", episode=" + episode +
                ", rating=" + rating +
                ", spoilers=" + spoilers +
                ", review='" + review + '\'' +
                '}';
    }
}
