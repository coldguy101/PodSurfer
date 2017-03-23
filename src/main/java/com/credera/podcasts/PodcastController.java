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

    @RequestMapping(
            value = "/all",
            method = RequestMethod.GET
    )
    public PodcastModel[] getPodcasts() {
        return podService.getAllPodcasts();
    }

    @RequestMapping(
            value = "/delete/{id}",
            method = RequestMethod.DELETE
    )
    public String deletePodcast(
            @PathVariable(value="id") String id,
            @RequestHeader HttpHeaders headers) {
        System.out.println("Headers: " + headers);
        return podService.deletePodcast(headers, id);
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

    @RequestMapping(
            value = "/get/{id}",
            method = RequestMethod.GET
    )
    public PodcastModel getPodcast(
            @PathVariable(value="id") String id) {
        return podService.getPodcast(id);
    }

    @RequestMapping(
            value = "/update/{id}",
            method = RequestMethod.PUT,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE
    )
    @ResponseBody
    public String updatePodcast(
            @PathVariable(value="id") String id,
            @RequestHeader HttpHeaders headers,
            HttpEntity<String> entity) {
        System.out.println("ID: " + id);
        String result = podService.updatePodcast(headers, entity, id);
        System.out.println("Response:" + result);
        return result;
    }

    /* @RequestMapping(
            value = "/update/{id}",
            method = RequestMethod.PUT,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE
    )
    public String updateReview(
            @PathVariable(value="id") String id,
            @RequestHeader HttpHeaders headers,
            @RequestBody MultiValueMap<String, String> bod) {
        System.out.println("Headers: " + headers);
        System.out.println("id: " + id);
        System.out.println("body: bod");
        return revService.updateReview(id, headers, bod);
    }*/

}
