package com.credera.users;

import com.sun.security.auth.callback.DialogCallbackHandler;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.test.web.servlet.setup.StandaloneMockMvcBuilder;

import static org.junit.Assert.*;

/**
 * Created by Nathan on 3/21/2017.
 */
@RunWith(SpringJUnit4ClassRunner.class)

public class UserControllerTest {
    StandaloneMockMvcBuilder mockMvc;

    @Before
    public void setup() {

        mockMvc = MockMvcBuilders.standaloneSetup();

    }

    @Test
    public void login() throws Exception {
    UserController.class.newInstance().login()
    }

    @Test
    public void getYourInfo() throws Exception {

    }

    @Test
    public void create() throws Exception {

    }
    @Test
    public void testHome() throws Exception {


        mockMvc.perform(get("/"))
                .andExpect(status().isOk())
                .andExpect(forwardedUrl("WEB-INF/pages/index.jsp"));

    }
}