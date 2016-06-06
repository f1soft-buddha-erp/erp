package com.nikesh.config;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

/**
 *
 * @author nikesh.maharjan
 */
@Configuration
@PropertySource(value = "classpath:application.properties")
public class DataConfig {
    
    @Autowired
    private Environment env;
    
    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        
        dataSource.setDriverClassName(env.getProperty("jdbc.driverClass"));
        dataSource.setPassword(env.getProperty("jdbc.pass"));
        dataSource.setUsername(env.getProperty("jdbc.user"));
        dataSource.setUrl(env.getProperty("jdbc.host"));
        
        return dataSource;
    }
    
    @Bean
    @Autowired
    public JdbcOperations getJdbcTemplate(DataSource source) {
        return new JdbcTemplate(source);
    }
    
}
