package com.nikesh.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

/**
 *
 * @author nikesh.maharjan
 */
public class AppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class<?>[]{RootConfig.class}; // configuration for the component scan application-wide
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class<?>[]{WebConfig.class}; // configuration for component scan (controllers) and view resolvers
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};   // mapping dispatcher to /
    }

}
