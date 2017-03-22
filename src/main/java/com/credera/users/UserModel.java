package com.credera.users;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Arrays;
import java.util.Date;

/**
 * Created by Mitchell on 2/19/17.
 */

@JsonIgnoreProperties(ignoreUnknown = true)
public class UserModel {

    private String name;
    private String email;
    private String password;
    private String id;
    private String[] interests;
    private String[] bookmarks;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String[] getInterests() {
        return interests;
    }

    public void setInterests(String[] interests) {
        this.interests = interests;
    }

    public String[] getBookmarks() {
        return bookmarks;
    }

    public void setBookmarks(String[] bookmarks) {
        this.bookmarks = bookmarks;
    }

    @Override
    public String toString() {
        return "UserModel{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", id=" + id +
                ", interests=" + Arrays.toString(interests) +
                ", bookmarks=" + Arrays.toString(bookmarks) +
                '}';
    }
}
