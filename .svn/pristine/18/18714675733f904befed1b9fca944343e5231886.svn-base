package com.nikesh.controller;

import com.nikesh.dao.UserMenuDAO;
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

    @Autowired
    private UserMenuDAO dao;

    @RequestMapping(method = RequestMethod.GET)
    public String showCreateProfile() {
        System.out.println(dao.getAllPossibleMenus());
        return "create_profile";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/navigation")
    public String showNavPage() {
        return "navigation";
    }

}
