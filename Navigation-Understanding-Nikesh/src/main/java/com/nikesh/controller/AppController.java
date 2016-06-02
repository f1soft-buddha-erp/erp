package com.nikesh.controller;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author nikesh.maharjan
 */
@Controller("/")
public class AppController {


    @RequestMapping(method = RequestMethod.GET)
    public String showCreateProfile() {
        return "create_profile";
    }

}
