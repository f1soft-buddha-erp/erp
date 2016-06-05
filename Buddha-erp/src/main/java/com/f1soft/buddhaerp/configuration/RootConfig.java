package com.f1soft.buddhaerp.configuration;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScan.Filter;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 *
 * @author nikesh.maharjan
 */
@Configuration
@ComponentScan(basePackages = "com.f1soft.buddhaerp",
        excludeFilters = {
            @Filter(type = FilterType.ANNOTATION, value = EnableWebMvc.class)
        })
public class RootConfig {

}
