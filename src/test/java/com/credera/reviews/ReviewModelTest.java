package com.credera.reviews;

import com.credera.users.UserModel;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by Nathan on 3/21/2017.
 */
public class ReviewModelTest {
    private ReviewModel model = new ReviewModel();
    @Before
    public void setup()throws Exception
    {
        model.setName("name");
        model.setEpisode(0);
        model.setPodcast("0");
        model.setRating(0);
        model.setReview("review");
        model.setSpoilers(Boolean.FALSE);
    }
    @Test
    public void getNameTest() throws Exception {
        assertEquals(model.getName(),"name");
    }


    @Test
    public void getPodcast() throws Exception {
        assertEquals(model.getPodcast(),"0");
    }


    @Test
    public void getEpisode() throws Exception {
        Integer i = 0;
        assertEquals((model.getEpisode()),i);
    }

    @Test
    public void getRating() throws Exception {
        Integer i = 0;
        assertEquals(model.getRating(),i);
    }

    @Test
    public void getSpoilers() throws Exception {
        assertEquals(model.getSpoilers(),Boolean.FALSE);
    }

    @Test
    public void getReview() throws Exception {
        assertEquals(model.getReview(),"review");
    }
}