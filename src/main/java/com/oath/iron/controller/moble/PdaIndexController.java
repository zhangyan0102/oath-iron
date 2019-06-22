package com.oath.iron.controller.moble;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.oath.iron.common.BaseController;


@Controller
@RequestMapping("mobile")
public class PdaIndexController extends BaseController {
    @RequestMapping("/")
    public String index(Model model, HttpSession session){
        return "moble/pdaIndex";
    }
}