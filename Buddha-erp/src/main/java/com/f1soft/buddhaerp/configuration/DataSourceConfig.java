package com.f1soft.buddhaerp.configuration;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

/**
 *
 * @author nikesh.maharjan
 */
@Configuration
//@EnableJpaRepositories("com.f1soft.buddhaerp.repository")
@PropertySource(value = "classpath:application.properties")
public class DataSourceConfig {

    @Autowired
    private Environment env;

    @Bean(name = "dataSource")
    public DataSource getDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();

        dataSource.setUrl(env.getProperty("connection.url"));
        dataSource.setUsername(env.getProperty("connection.user"));
        dataSource.setPassword(env.getProperty("connection.pass"));
        dataSource.setDriverClassName(env.getProperty("connection.driverClass"));

        return dataSource;
    }

    /*@Bean
    public EntityManagerFactory entityManagerFactory() {

        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setGenerateDdl(true);

        LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
        factory.setJpaVendorAdapter(vendorAdapter);
        factory.setPackagesToScan("com.f1soft.buddhaerp.entity");
        factory.setDataSource(getDataSource());
        factory.afterPropertiesSet();

        return factory.getObject();
    }*/
}
