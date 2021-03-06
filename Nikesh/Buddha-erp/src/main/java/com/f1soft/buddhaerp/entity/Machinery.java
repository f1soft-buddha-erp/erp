package com.f1soft.buddhaerp.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author nikesh.maharjan
 */
@Entity
@Table(name = "machinery")
public class Machinery implements Serializable {

    @Id
    @Column(name = "machine_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "machine_name", nullable = false)
    private String machineName;

    @Column(name = "machine_type", nullable = false)
    private String machineType;

    @Column(name = "acquired_date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date acquiredDate;

    @Column(name = "maintenance_date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date maintenanceDate;

    @Column(name = "last_maintenance_date", nullable = true)
    @Temporal(TemporalType.DATE)
    private Date lastMaintenanceDate;

    @Column(name = "maintenance_cycle_per_year", nullable = false)
    private Integer maintenanceCyclePerYear;

    @Column(name = "active", nullable = false)
    private String active;

    @Column(name = "assigned_to", nullable = true)
    private String assignedTo;

    @Column(name = "acquisition_cost", nullable = false, precision = 4)
    private Double acquisitionCost;

    @Column(name = "registration_no", nullable = false)
    private String registrationNo;

    @Column(name = "machine_company_name", nullable = false)
    private String machineCompanyName;

    @Column(name = "depreciation_rate", nullable = false)
    private Integer depreciationRate;

    @Column(name = "current_value", nullable = false, precision = 4)
    private Double currentValue;

    public Machinery() {
    }

    public Machinery(long id) {
        this.id = id;
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

    @Override
    public String toString() {
        return "Machinery{" + "id=" + id + ", machineName=" + machineName + ", machineType=" + machineType + ", acquiredDate=" + acquiredDate + ", maintenanceDate=" + maintenanceDate + ", lastMaintenanceDate=" + lastMaintenanceDate + ", maintenanceCyclePerYear=" + maintenanceCyclePerYear + ", active=" + active + ", assignedTo=" + assignedTo + ", acquisitionCost=" + acquisitionCost + ", registrationNo=" + registrationNo + ", machineCompanyName=" + machineCompanyName + ", depreciationRate=" + depreciationRate + ", currentValue=" + currentValue + '}';
    }

}
