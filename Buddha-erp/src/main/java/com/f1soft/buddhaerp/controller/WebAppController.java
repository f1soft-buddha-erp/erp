package com.f1soft.buddhaerp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 *
 * @author nikesh.maharjan
 */
@Controller
@RequestMapping("/")
public class WebAppController {

    @RequestMapping(method = GET)
    public String showIndexPage() {
        return "index";
    }

    @RequestMapping(method = GET, value = "/machinery/list")
    public String showMachineryStartPage() {
        return "/machinery/machinery_list";
    }

}
