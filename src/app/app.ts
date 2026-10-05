import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

// 
import { DiagramComponent } from './components/diagram-component/diagram-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { FeatureComponent } from './components/feature-component/feature-component';
import { ClientComponent } from './components/client-component/client-component';
import { NavbarComponent } from './components/navbar-component/navbar-component';

@Component({
  selector: 'app-root',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    DiagramComponent,
    FooterComponent,
    FeatureComponent,
    ClientComponent,
    NavbarComponent
  ],
  templateUrl: './app.html',
  styleUrls: []
})

export class App {
  raydashData = {
    navbarItems: [
      {
        hrefId: "description",
        title: "Why Raydash?"
      },
      {
        hrefId: "features",
        title: "Features"
      },
      {
        hrefId: "architecture",
        title: "Architecture"
      },
      {
        hrefId: "protocol",
        title: "Protocol"
      },
      {
        hrefId: "clients",
        title: "Clients"
      },
      {
        hrefId: "links",
        title: "Links"
      }
    ],
    raydashFeatures: [
      "Binary safe protocol",
      "Optional AUTH",
      "Graceful shutdown",
      "Ready to use client support (Spring Boot)",
      "Optional Postgres persistence",
    ],
    diagrams: [
      {
        heading: "Architecture",
        cardTitle: "How does this whole project work?",
        assetSrc: "../assets/architecture.png",
        githubLink: "https://github.com/Harshitv21/raydash/blob/1720dacfb28abd90587c0ee133eb5b0b24b0af8b/diagrams/architecture.png"
      },
      {
        heading: "Protocol",
        cardTitle: "Binary safe protocol",
        assetSrc: "../assets/protocol.png",
        githubLink: "https://github.com/Harshitv21/raydash/blob/master/diagrams/protocol.png?raw=true"
      }
    ],
    clients: [
      {
        clientName: "Springboot",
        links: [
          {
            linkTitle: "Maven Repository",
            link: "https://mvnrepository.com/artifact/app.raydash/raydash-client-java"
          },
          {
            linkTitle: "Github Repository",
            link: "https://github.com/Harshitv21/raydash-client-java"
          }
        ]
      },
    ]
  }
}