package com.credera.podcasts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * Created by sean on 2/14/17.
 */

@RestController

@RequestMapping("/api/podcast")
public class PodcastController {

    @Autowired
    private PodcastService podService;

    @RequestMapping("/podcasts")
    public PodcastModel[] getPodcasts() {
        return podService.getAllPodcasts();
    }

    @RequestMapping("/delete")
    public String deletePodcast(@RequestHeader HttpHeaders headers) {
        System.out.println("Headers: " + headers);
        return podService.deleteOldPodcast(headers);
    }

    @RequestMapping(
            value = "/create",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE
    )
    @ResponseBody
    public String createNewPodcast(
            @RequestHeader HttpHeaders headers,
            HttpEntity<String> entity) {
        String result = podService.createPodcast(headers, entity);
        System.out.println("Response:" + result);
        return result;
    }

    @RequestMapping("/get")
    public PodcastModel getPodcast() {
        return podService.getPodcast();
    }

    @RequestMapping("/update")
    public String updatePodcast(@RequestHeader HttpHeaders headers) {
        System.out.println("Headers: " + headers);
        return podService.updatePodcast(headers);
    }

}
