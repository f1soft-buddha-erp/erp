package com.nikesh.controller;

import com.nikesh.dao.UserMenuDAO;
import com.nikesh.model.UserMenu;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nikesh.maharjan
 */
@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private UserMenuDAO dao;

    @RequestMapping(method = RequestMethod.GET, value = "/menus", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<UserMenu> getAllMenus() {
        return dao.getAllPossibleMenus();
    }

}
