<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h2 class="text-sm-h2 my-6 text-center">Les co-fondateurs</h2>
      <v-row>
        <v-col cols="12" offset='0' sm='10' offset-sm='1'>
          <CardCheese>
            <v-img
              class="white--text align-end"
              src="/img/raclette-world-co-funders.jpg"
            >
              <v-card-title
                >Un trio pour l'intelligence artificielle au service de la
                raclette</v-card-title
              >
            </v-img>
            <v-card-text class="text--primary">
              <div>
                Ce pari fou que se sont lancés les 3 co-fondateurs de
                Raclette.World : mettre l'intelligence artificielle au service
                de la raclette.
              </div>
              <div>
                Fruit de centaines d'heures de recherche et développement, les
                trois co-fondateurs ont mis au point une technologie d'IA
                post-quantique basée sur la blockchain dans le metaverse. Cette
                technologie enviée par de nombreuses entreprises de la Silicon
                Valley rend enfin accessible au plus grand nombre un calculateur
                de raclette d'une efficacité sans pareil.
              </div>
            </v-card-text>
          </CardCheese>
        </v-col>
      </v-row>
      <h2 class="text-sm-h2 my-6 text-center">Nos valeurs</h2>
      <v-row>
        <v-col cols="12" sm='4'>
          <CardCheese class='mb-4'>
            <v-img class="white--text align-end" src="/img/1.jpg">
              <v-card-title>L'exigence</v-card-title>
            </v-img>
          </CardCheese>
          </v-col>
        <v-col cols="12" sm='4'>
          <CardCheese class='mb-4'>
            <v-img class="white--text align-end" src="/img/3.jpg">
              <v-card-title>La qualité</v-card-title>
            </v-img>
          </CardCheese>
        </v-col>
        <v-col cols="12" sm='4'>
          <CardCheese class='mb-4'>
            <v-img class="white--text align-end" src="/img/2.jpg">
              <v-card-title>La persévérance</v-card-title>
            </v-img>
          </CardCheese>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols='12'>
          <CardCheese>
            <v-card-title class='justify-center'
            >Ils parlent de nous
            </v-card-title
            >
            <v-card-text class='text--primary' min-height='100%'>
              <div>
                <p class='mb-6 text-lg-body-1 text-center font-italic'>
                  "72% des français ne connaissent pas les quantités de fromage et
                  d'accompagnement nécessaires pour la raclette" - Etude réalisée
                  par l'INFEL (Institut National du Fromage et des Etudes
                  Laitières) - 2021
                </p>
              </div>
            </v-card-text>
          </CardCheese>
        </v-col>
      </v-row>
        <h2 class="text-sm-h2 my-6 text-center">
          Ils utilisent Raclette.World
        </h2>
      <v-row>
        <v-col cols="12" sm='4'>
          <CardCheese class='mb-4'>
            <v-img class="white--text align-end" src="/img/4.jpg">
              <v-card-title>François Hollande</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>
                <i
                  >« Cet outil est vraiment pratique, même pour les sans-dents.
                  Niehéééé. »</i
                >
              </div>
            </v-card-text>
          </CardCheese>
        </v-col>
        <v-col cols="12" sm='4'>
          <CardCheese class='mb-4'>
            <v-img class="white--text align-end" src="/img/5.jpg">
              <v-card-title>Des gens random</v-card-title>
            </v-img>
            <v-card-text class="text--primary" min-height="100%">
              <div>
                <i
                  >« Sous prétexte que nous sommes des gens random de Getty
                  Images, on aurait pas le droit d'utiliser Raclette.World ?
                  »</i
                >
              </div>
            </v-card-text>
          </CardCheese>
        </v-col>
        <v-col cols="12" sm='4'>
          <CardCheese class='mb-4'>
            <v-img class="white--text align-end" src="/img/6.jpg">
              <v-card-title>Jul</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>
                <i
                  >« On m'appelle l'OVNI car j'achète toujours pile poil ce
                  qu'il faut pour les raclettes »</i
                >
              </div>
            </v-card-text>
          </CardCheese>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CardCheese from '../components/CardCheese';

export default {
  name: 'AboutUs',
  components: { CardCheese },
};
</script>
