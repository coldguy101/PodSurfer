package com.credera.reviews;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Arrays;
import java.util.Date;

/**
 * Created by Mitchell on 2/19/17.
 */

@JsonIgnoreProperties(ignoreUnknown = true)
public class ReviewModel {

    private String name;
    private String podcast;
    private int episode;
    private int rating;
    private Boolean spoilers;
    private String review;
    private Object reviewer;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPodcast() {
        return podcast;
    }

    public void setPodcast(String podcast) {
        this.podcast = podcast;
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

    public Object getReviewer() { return reviewer; }

    public void setReviewer(Object reviewer) { this.reviewer = reviewer; }

    @Override
    public String toString() {
        return "ReviewModel{" +
                "name='" + name + '\'' +
                ", podcast=" + podcast +
                ", episode=" + episode +
                ", rating=" + rating +
                ", spoilers=" + spoilers +
                ", review='" + review + '\'' +
                '}';
    }
}
