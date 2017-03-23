package com.credera.podcasts;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestContext;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import javax.validation.constraints.AssertTrue;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.junit.Assert.*;

/**
 * Created by Nathan on 3/21/2017.
 */

//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(classes = {TestContext.class, WebApplicationContext.class})
//@ContextConfiguration(locations = { "classpath:/test/BeanConfig.xml" })
//@RunWith(SpringJUnit4ClassRunner.class)
//@WebAppConfiguration
@ContextConfiguration
//@ContextConfiguration("test-servlet-context.xml")
public class PodcastControllerTest {
    //private MockMvc mockMvc = standaloneSetup(new PodcastController()).build();

    //@Autowired
    protected PodcastService podcastService;
    //private WebApplicationContext webApplicationContext;

    //private MockMvc mockMvc;

    @Before
    public void setup() {
        podcastService = new PodcastService();
        //this.mockMvc = MockMvcBuilders.standaloneSetup(new PodcastController()).build();


//        MockitoAnnotations.initMocks(this);
//        this.mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).dispatchOptions(true).build();

        //mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void get_all_podcasts_test() throws Exception {
        PodcastModel[] pods = podcastService.getAllPodcasts();

        Assert.assertTrue("Didnt work...", pods.length > 0);

        //mockMvc.perform(MockMvcRequestBuilders.get("/api/podcast/all"))
        //        .andExpect(status().isOk())
        //        .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

}