package com.nikesh.model;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author nikesh.maharjan
 */
public class UserMenu {

    private Menu parent;

    private List<MenuItem> menuItems;

    public UserMenu() {
        parent = new Menu();
        menuItems = new ArrayList<>();
    }

    public UserMenu(Menu p, List<MenuItem> mI) {
        this.parent = p;
        this.menuItems = mI;
    }

    public Menu getParent() {
        if (parent == null) {
            parent = new Menu();
        }
        return parent;
    }

    public void setParent(Menu parent) {
        this.parent = parent;
    }

    public List<MenuItem> getMenuItems() {
        if (menuItems == null) {
            menuItems = new ArrayList<>();
        }
        return menuItems;
    }

    public void setMenuItems(List<MenuItem> menuItems) {
        this.menuItems = menuItems;
    }

    public void setMenuItems(MenuItem mI) {
        this.menuItems.add(mI);
    }

    @Override
    public String toString() {
        return "UserMenu{" + "parent=" + parent + ", menuItems=" + menuItems + '}';
    }

}
