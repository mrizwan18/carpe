package com.zabarzer.carpe.entity;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.Id;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "pools")
public class Pool {

    @Id
    private String id;
    private String image;
    private String altImageText;
    private String tag;
    private String tagColor;
    private String headerText;
    private String title;
    private String mapLink;
    private String address;
    private String timein;
    private String timeout;
    private int availableSeats;
    private double cost;

}

