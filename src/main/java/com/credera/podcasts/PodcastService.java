package com.credera.podcasts;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

/**
 * Created by sean on 2/14/17.
 */

@Service
public class PodcastService {

    public PodcastModel[] getAllPodcasts() {
        RestTemplate rt = new RestTemplate();
        PodcastModel[] pm = rt.getForObject("https://podsurfer-spring3.herokuapp.com/api/podcast/", PodcastModel[].class);
        for(PodcastModel pmm : pm)
            System.out.println(pmm);
        return pm;
    }
}
