package com.credera.users;

import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.*;

/**
 * Created by Nathan on 3/21/2017.
 */

public class UserModelTest {
    private UserModel model = new UserModel();
    @Before
    public void setup()throws Exception
    {
        String name = "name";
        String password = "password";
        String bookmarks [] = {"1", "2"};
        String Interests [] = {"i1", "i1"};
        String Id = "1";
        model.setEmail("email");
        model.setPassword(password);
        model.setName(name);
        model.setBookmarks(bookmarks);
        model.setId(Id);
        model.setInterests(Interests);

    }

    @Test
    public void getEmailTest() throws Exception {
        assertEquals(model.getEmail(),"email");
    }

    @Test
    public void setEmailTest() throws Exception {
        model.setEmail("test");
        assertEquals(model.getEmail(),"test");
    }

    @Test
    public void getPasswordTest() throws Exception {
        assertEquals(model.getPassword(),"password");

    }

    @Test
    public void setPasswordTest() throws Exception {
        model.setPassword("test");
        assertEquals(model.getPassword(),"test");
    }

    @Test
    public void getNameTest() throws Exception {
        assertEquals(model.getName(),"name");
    }

    @Test
    public void setNameTest() throws Exception {
        model.setName("test");
        assertEquals(model.getName(),"test");
    }

    @Test
    public void getIdTest() throws Exception {
        assertEquals(model.getId(),"1");
    }

    @Test
    public void setIdTest() throws Exception {
        model.setId("2");
        assertEquals(model.getId(),"2");
    }

    @Test
    public void getInterestsTest() throws Exception {
        String Interests[] = {"i1", "i1"};
        assertArrayEquals(model.getInterests(), Interests);
    }

    @Test
    public void setInterestsTest() throws Exception {
        String Interests[] = {"i1", "i1"};
        model.setInterests(Interests);
        assertArrayEquals(model.getInterests(), Interests);
    }

    @Test
    public void getBookmarksTest() throws Exception {
        String bookmarks [] = {"1", "2"};
        assertArrayEquals(bookmarks,model.getBookmarks());


    }

}