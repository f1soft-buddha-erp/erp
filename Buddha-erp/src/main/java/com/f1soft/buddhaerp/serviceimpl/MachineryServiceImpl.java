package com.f1soft.buddhaerp.serviceimpl;

import com.f1soft.buddhaerp.entity.Machinery;
import com.f1soft.buddhaerp.repository.MachineryRepository;
import com.f1soft.buddhaerp.service.MachineryService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author nikesh.maharjan
 */
@Service
public class MachineryServiceImpl implements MachineryService {

    @Autowired
    private MachineryRepository repository;

    @Override
    public List<Machinery> getAllMachinery() {
        return repository.findAll();
    }

}
