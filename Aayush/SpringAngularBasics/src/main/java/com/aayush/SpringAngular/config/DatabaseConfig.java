package com.aayush.SpringAngular.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
public class DatabaseConfig {

    private static final String DRIVER_NAME = "com.mysql.jdbc.Driver";
    private static final String URL = "jdbc:mysql://10.13.213.10:3306/buuda_air_test";
    private static final String USERNAME = "fonebank";
    private static final String PASSWORD = "fonebank";
    
    //for home use
//    private static final String DRIVER_NAME = "com.mysql.jdbc.Driver";
//    private static final String URL = "jdbc:mysql://localhost:3306/user_details";
//    private static final String USERNAME = "root";
//    private static final String PASSWORD = "purified";

    @Bean
    public DriverManagerDataSource getDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(DRIVER_NAME);
        dataSource.setUrl(URL);
        dataSource.setUsername(USERNAME);
        dataSource.setPassword(PASSWORD);
        return dataSource;
    }

    @Bean
    public JdbcTemplate getJdbcDataSource(DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }

}
