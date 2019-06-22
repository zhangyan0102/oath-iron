package com.oath.iron.common;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public abstract class BaseController {
	protected Object renderSuccess() {
		Map<String, Object> map = new HashMap<>();
		map.put("msg", "操作成功");
		map.put("success", true);
		ObjectMapper obj = new ObjectMapper();
		try {
			return obj.writeValueAsString(map);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}

	protected Object renderJsonSuccess() {
		Map<String, Object> map = new HashMap<>();
		map.put("msg", "操作成功");
		map.put("success", true);
		ObjectMapper obj = new ObjectMapper();
		try {
			return obj.writeValueAsString(map);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}

	protected Object renderError(String message) {
		Map<String, Object> map = new HashMap<>();
		map.put("msg", message);
		map.put("success", false);
		ObjectMapper obj = new ObjectMapper();
		try {
			return obj.writeValueAsString(map);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}
}
