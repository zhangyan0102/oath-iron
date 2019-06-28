package com.oath.iron.controller.pc;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.oath.iron.common.BaseController;

/**
 * 产品页面 yangjw
 */
@Controller
public class ProductController extends BaseController {
    @RequestMapping("/product")
    public String index(HttpSession session, Model model) {
        return "pc/product";
    }
}