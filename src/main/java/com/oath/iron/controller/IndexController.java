package com.oath.iron.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.oath.iron.common.BaseController;

/**
 * @author loxn
 */
@Controller
public class IndexController extends BaseController {
    @RequestMapping("/")
    public String index(HttpSession session, Model model) {
        return "index";
    }

    @RequestMapping("/index")
    public String index2(HttpSession session, Model model) {
        return "index";
    }
}