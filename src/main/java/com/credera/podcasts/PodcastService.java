package com.credera.podcasts;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.lang.model.type.NullType;
import javax.validation.constraints.Null;

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

    public PodcastModel getPodcast(String id) {
        RestTemplate rt = new RestTemplate();
        PodcastModel pm = rt.getForObject("https://podsurfer-spring3.herokuapp.com/api/podcast/" + id, PodcastModel.class);
        System.out.println(pm);
        return pm;
    }

    public String createPodcast(HttpEntity<String> entity) {
        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> auth = rt.postForEntity("https://podsurfer-spring3.herokuapp.com/api/podcast/", entity, String.class);
        System.out.println(auth.getBody());
        return auth.getBody();
    }

    public String updatePodcast(HttpEntity<String> entity, String id) {
        RestTemplate rt = new RestTemplate();

        rt.put("https://podsurfer-spring3.herokuapp.com/api/podcast/" + id, entity);
        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/podcast/" + id, HttpMethod.PUT, entity, String.class);

        return res.getBody();
    }

    public String deletePodcast(HttpHeaders headers, String id) {
        RestTemplate rt = new RestTemplate();
        HttpEntity request = new HttpEntity(headers);
        System.out.println("Attempting delete on: " + id);
        ResponseEntity<String> res =  rt.exchange("https://podsurfer-spring3.herokuapp.com/api/podcast/" + id, HttpMethod.DELETE, request, String.class);
        return res.getBody();
    }
}
