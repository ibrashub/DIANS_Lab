package com.example.demo.dao;

import com.example.demo.model.Parking;
import com.example.demo.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository("fakeDaoParking")
public class FakeParkingDataAccessService implements ParkingDao
{
    private static List<Parking> parkings = new ArrayList<>();

    @Override
    public int insertParking(Parking parking)
    {
       // parkings.add(new Parking(parking.getName()));
        return 1;
    }

    @Override
    public List<Parking> selectAllParkings()
    {
        if(parkings.isEmpty()) {
            parkings.add(new Parking("Parking Mlaka"));
            parkings.add(new Parking("Potok Parking"));
            parkings.add(new Parking("Gomila Square Parking"));			
            parkings.add(new Parking("Velebitska Parking"));
            parkings.add(new Parking("Parking Rijeka"));
            parkings.add(new Parking("Tower Center Parking"));
            parkings.add(new Parking("Parking Žurkovo"));
            parkings.add(new Parking("Parking Glavani"));
        }
        return parkings;
    }
}
