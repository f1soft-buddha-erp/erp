package com.f1soft.buddhaerp.request.dto;

import java.util.Date;

/**
 *
 * @author nikesh.maharjan
 */
public class MachineryRequestDTO {

    private Long id;

    private String machineName;

    private String machineType;

    private Date acquiredDate;

    private Date maintenanceDate;

    private Date lastMaintenanceDate;

    private Integer maintenanceCyclePerYear;

    private String active;

    private String assignedTo;

    private Double acquisitionCost;

    private String registrationNo;

    private String machineCompanyName;

    private Integer depreciationRate;

    private Double currentValue;

    public MachineryRequestDTO(Long id) {
        this.id = id;
    }

    public MachineryRequestDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMachineName() {
        return machineName;
    }

    public void setMachineName(String machineName) {
        this.machineName = machineName;
    }

    public String getMachineType() {
        return machineType;
    }

    public void setMachineType(String machineType) {
        this.machineType = machineType;
    }

    public Date getAcquiredDate() {
        return acquiredDate;
    }

    public void setAcquiredDate(Date acquiredDate) {
        this.acquiredDate = acquiredDate;
    }

    public Date getMaintenanceDate() {
        return maintenanceDate;
    }

    public void setMaintenanceDate(Date maintenanceDate) {
        this.maintenanceDate = maintenanceDate;
    }

    public Date getLastMaintenanceDate() {
        return lastMaintenanceDate;
    }

    public void setLastMaintenanceDate(Date lastMaintenanceDate) {
        this.lastMaintenanceDate = lastMaintenanceDate;
    }

    public Integer getMaintenanceCyclePerYear() {
        return maintenanceCyclePerYear;
    }

    public void setMaintenanceCyclePerYear(Integer maintenanceCyclePerYear) {
        this.maintenanceCyclePerYear = maintenanceCyclePerYear;
    }

    public String getActive() {
        return active;
    }

    public void setActive(String active) {
        this.active = active;
    }

    public String getAssignedTo() {
        return assignedTo;
    }

    public void setAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
    }

    public Double getAcquisitionCost() {
        return acquisitionCost;
    }

    public void setAcquisitionCost(Double acquisitionCost) {
        this.acquisitionCost = acquisitionCost;
    }

    public String getRegistrationNo() {
        return registrationNo;
    }

    public void setRegistrationNo(String registrationNo) {
        this.registrationNo = registrationNo;
    }

    public String getMachineCompanyName() {
        return machineCompanyName;
    }

    public void setMachineCompanyName(String machineCompanyName) {
        this.machineCompanyName = machineCompanyName;
    }

    public Integer getDepreciationRate() {
        return depreciationRate;
    }

    public void setDepreciationRate(Integer depreciationRate) {
        this.depreciationRate = depreciationRate;
    }

    public Double getCurrentValue() {
        return currentValue;
    }

    public void setCurrentValue(Double currentValue) {
        this.currentValue = currentValue;
    }

}
