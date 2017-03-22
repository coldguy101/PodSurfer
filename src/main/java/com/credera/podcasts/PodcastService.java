package com.credera.podcasts;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.util.LinkedMultiValueMap;


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

    public PodcastModel getPodcast() {
        RestTemplate rt = new RestTemplate();
        PodcastModel pm = rt.getForObject("https://podsurfer-spring3.herokuapp.com/api/podcast/:id", PodcastModel.class);
        System.out.println(pm);
        return pm;
    }

    public String createPodcast(HttpHeaders headers, HttpEntity<String> entity) {
        RestTemplate rt = new RestTemplate();

        //System.out.println("Hello");
        ResponseEntity<String> auth = rt.postForEntity("https://podsurfer-spring3.herokuapp.com/api/podcast/", entity, String.class);

        System.out.println(auth.getBody());
        return auth.getBody();
    }



    //Again... If sean fucks up.
//    public String createPodcast(HttpHeaders headers, ResponseEntity<String> entity) {
//        RestTemplate rt = new RestTemplate();
//
//        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
//
//        MultiValueMap<String, String> data = new LinkedMultiValueMap<>();
//        data.add("name", pod.getName());
//        data.add("description", pod.getDescription());
//        data.add("link", pod.getLink());
//        data.add("producer", pod.getProducer());
//        data.add("length", pod.getLength());
//        data.add("imageURL", pod.getImageURL());
//
//        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(data, headers);
//        //System.out.println("Hello");
//        ResponseEntity<String> auth = rt.postForEntity("https://podsurfer-spring3.herokuapp.com/api/podcast/", request, String.class);
//
//        System.out.println(auth.getBody());
//        return auth.getBody();
//    }

    /*public String createUser(String name, String email, String pass) {
        RestTemplate rt = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> data = new LinkedMultiValueMap<>();
        data.add("email", email);
        data.add("password", pass);
        data.add("name", name);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(data, headers);
        ResponseEntity<String> auth = rt.postForEntity("https://podsurfer-spring3.herokuapp.com/api/user", request, String.class);

        System.out.println(auth.getBody());
        return auth.getBody();
    }*/

    public String updatePodcast(HttpHeaders headers) {
        RestTemplate rt = new RestTemplate();

        HttpEntity<HttpHeaders> head = new HttpEntity<>(headers);

        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/podcast/:id", HttpMethod.PUT, head, String.class);

        return res.getBody();
    }

    public String deleteOldPodcast(HttpHeaders headers) {
        RestTemplate rt = new RestTemplate();

        HttpEntity<HttpHeaders> head = new HttpEntity<>(headers);

        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/podcast/:id", HttpMethod.DELETE, head, String.class);

        return res.getBody();
    }
}
