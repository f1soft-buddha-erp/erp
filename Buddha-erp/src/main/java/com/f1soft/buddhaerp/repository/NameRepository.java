package com.f1soft.buddhaerp.repository;

import com.f1soft.buddhaerp.entity.Name;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author nikesh.maharjan
 */
public interface NameRepository extends JpaRepository<Name, Integer> {

    int findIdByName(String name);

}
