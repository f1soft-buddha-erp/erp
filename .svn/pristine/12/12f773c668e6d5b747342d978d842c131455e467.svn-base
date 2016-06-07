package com.aayush.SpringAngular.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aayush.SpringAngular.model.User;

@Service("userService")
@Transactional
@Component
public class UserServiceImpl implements UserService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public User findById(int id) {
        String sql = "SELECT * FROM user_details WHERE id = '" + id + "'";
        return jdbcTemplate.query(sql, new ResultSetExtractor<User>() {

            @Override
            public User extractData(ResultSet rs) throws SQLException, DataAccessException {
                if (rs.next()) {
                    User user = new User();
                    user.setId(rs.getInt("id"));
                    user.setFirstName(rs.getString("first_name"));
                    user.setLastName(rs.getString("last_name"));
                    user.setMobileNumber(rs.getLong("mobile_number"));
                    user.setUserName(rs.getString("username"));
                    user.setPassword(rs.getString("password"));
                    user.setEmailAddress(rs.getString("email_address"));
                    user.setDob(rs.getDate("dob"));
                    user.setGender(rs.getString("gender"));
                    return user;
                }
                return null;
            }
        });

    }

    @Override
    public int saveUser(User user) {
        String sql = "INSERT INTO user_details(first_name, last_name , mobile_number , email_address , password , username , dob , gender,active) VALUES (?,?,?,?,?,?,?,?,?)";
        user.setActive("Y");
        int checkInsert = jdbcTemplate.update(sql, user.getFirstName(), user.getLastName(), user.getMobileNumber(),
                user.getEmailAddress(), user.getPassword(), user.getUserName(), user.getDob(), user.getGender() , user.getActive() );
        return checkInsert;
    }

    @Override
    public int updateUser(User user) {
        String sql = "UPDATE user_details SET first_name=?, last_name=? , mobile_number=? , email_address=? , password=? , username=? , dob=? ,gender=? WHERE id=?";
        int checkUpdate = jdbcTemplate.update(sql, user.getFirstName(), user.getLastName(), user.getMobileNumber(),
                user.getEmailAddress(), user.getPassword(), user.getUserName(), user.getDob(), user.getGender(), user.getId());
        return checkUpdate;
    }

    @Override
    public int deleteUser(int id) {
        String sql = "DELETE FROM user_details WHERE id =?";
        int checkDelete = jdbcTemplate.update(sql, id);
        return checkDelete;
    }

    @Override
    public List<User> listUsers() {
        String sql = "SELECT * FROM user_details";
        List<User> userList = jdbcTemplate.query(sql, new RowMapper<User>() {

            @Override
            public User mapRow(ResultSet rs, int arg1) throws SQLException {
                User user = new User();
                user.setId(rs.getInt("id"));
                user.setFirstName(rs.getString("first_name"));
                user.setLastName(rs.getString("last_name"));
                user.setMobileNumber(rs.getLong("mobile_number"));
                user.setUserName(rs.getString("username"));
                user.setPassword(rs.getString("password"));
                user.setEmailAddress(rs.getString("email_address"));
                user.setDob(rs.getDate("dob"));
                user.setGender(rs.getString("gender"));
                return user;
            }
        });
        return userList;
    }

    @Override
    public int deleteAllUsers() {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public boolean isUserExists(User user) {
        User checkUser = findById(user.getId());
        if (checkUser == null) {
            return false;
        }
        return true;
    }

}
