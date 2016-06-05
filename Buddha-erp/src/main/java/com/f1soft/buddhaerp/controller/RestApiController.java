package com.f1soft.buddhaerp.controller;

import com.f1soft.buddhaerp.entity.Machinery;
import com.f1soft.buddhaerp.entity.Name;
import com.f1soft.buddhaerp.repository.NameRepository;
import com.f1soft.buddhaerp.service.MachineryService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nikesh.maharjan
 */
@RestController
@RequestMapping("/api")
public class RestApiController {

    @Autowired
    private MachineryService machineryService;

    @Autowired
    private NameRepository nameRepo;

    @RequestMapping(value = "/machinery/list", method = GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Machinery>> getAllMachinery() {
        List<Machinery> allMachinery = machineryService.getAllMachinery();
        if (allMachinery == null) {
            return new ResponseEntity<>(allMachinery, HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(allMachinery, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/names", method = GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Name>> getAllNames() {
        List<Name> findAll = nameRepo.findAll();
        if (findAll == null) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(findAll, HttpStatus.OK);
        }
    }

}
