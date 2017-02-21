package com.credera.podcasts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by sean on 2/14/17.
 */

@RestController
public class PodcastController {

    @Autowired
    private PodcastService podService;

    @RequestMapping("/api/podcasts")
    public PodcastModel[] getPodcasts() {
        return podService.getAllPodcasts();
    }

}
