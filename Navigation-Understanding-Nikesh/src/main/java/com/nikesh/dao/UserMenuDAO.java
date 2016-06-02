package com.nikesh.dao;

import com.nikesh.model.Menu;
import com.nikesh.model.MenuItem;
import com.nikesh.model.UserMenu;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

/**
 *
 * @author nikesh.maharjan
 */
@Repository
public class UserMenuDAO {

    @Autowired
    private JdbcOperations jdbc;

    public List<UserMenu> getAllPossibleMenus() throws DataAccessException {
        final List<UserMenu> userMenus = new ArrayList<>();

        List<MenuItem> menuItems = jdbc.query("SELECT * FROM user_menus", new RowMapper<MenuItem>() {
            @Override
            public MenuItem mapRow(ResultSet rs, int rowNum) throws SQLException {
                int id = rs.getInt("id");
                String menuText = rs.getString("menu_text");
                int parent = rs.getInt("parent_id");

                MenuItem item = null;

                if (parent == 0) {
                    Menu menu = new Menu(id, menuText);
                    UserMenu um = new UserMenu();
                    um.setParent(menu);

                    userMenus.add(um);
                } else {
                    item = new MenuItem(id, menuText, parent);

                }

                return item;
            }
        });

        for (int i = 0; i < userMenus.size(); i++) {
            UserMenu userM = userMenus.get(i);
            int parentId = userM.getParent().getId();
            for (int j = 0; j < menuItems.size(); j++) {
                MenuItem item = menuItems.get(j);
                int parentOfChild = 0;
                if (item != null) {
                    parentOfChild = item.getParentId();
                }
                if (parentId == parentOfChild) {
                    userM.setMenuItems(item);
                }
            }
        }
//        System.out.println("Printing First UserMenu: " + userMenus.get(0));
        return userMenus;
    }
}
