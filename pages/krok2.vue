<template>
  <div class="container mt-5 pt-5">
    <h3 class="mt-5">
      Krok 2 Questions
    </h3>
    <ul>
      <li
        v-for="(question) in pageOfItems"
        :key="question._id"
        class="my-5"
      >
        <div class="mb-3">
          <b-tabs content-class="mt-3">
            <b-tab
              :title="question.number"
              active
            >
              <p>{{ question.question }}</p>
            </b-tab>

            <b-tab title="Highlight Keys">
              <!--eslint-disable-next-line vue/no-v-html -->
              <div v-html="`${question.q_Highlighted}`" />
            </b-tab>
            <b-badge
              v-for="(year, i) in question.years"
              :key="i"
              pill
              variant="info"
            >
              {{ year }}
            </b-badge>
          </b-tabs>
          <!-- <b-badge
            v-for="(year, i) in question.years"
            :key="i"
            pill
            variant="info"
          >
            {{ year }}
          </b-badge> -->
        </div>
        <div
          v-for="(option, index) in shuffle(question.options)"
          :key="index"
          class="choice-container"
        >
          <p class="choice-prefix text-uppercase">
            {{ index | charIndex }}
          </p>
          <p class="choice-text">
            <!-- :class="[(option.value===question.correctAnswer && toggle)?'correct':'', (option.value!==question.correctAnswer && toggle)?'incorrect':'']"
            @click.stop="toggle = !toggle" -->
            {{ option.value }}
          </p>
        </div>
        <div>
          <b-button
            v-b-toggle="'accordion-' + question._id"
            variant="primary"
          >
            Check Answer
          </b-button>
          <b-collapse
            :id="'accordion-' + question._id"
            class="mt-2"
          >
            <b-card>
              <div class="mb-2">
                Correct Answer: <span class="text-success">{{ question.correctAnswer }}</span>
              </div>

              <b-button
                v-b-toggle="`accordion-${question._id}-inner`"
                size="sm"
              >
                Reason/Explanation
              </b-button>
              <b-collapse
                :id="`accordion-${question._id}-inner`"
                class="mt-2"
              >
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div v-html="question.reason" />
              </b-collapse>
            </b-card>
          </b-collapse>
        </div>
      </li>
    </ul>
    <jw-pagination
      :items="krok2Collection"
      :page-size="parseInt(pageCount)"
      :labels="customLabels"
      @changePage="onChangePage"
    />

    <div class="section-top-border">
      <h3 class="mb-30">
        Laboratory values
      </h3>
      <h5>Complete blood count</h5>
      <div class="progress-table-wrap">
        <div class="progress-table">
          <div class="table-head">
            <div class="serial">
              #
            </div>
            <div class="country">
              Laboratory value
            </div>
            <div class="visit">
              Normal reference range
            </div>
          </div>
          <div class="table-row">
            <div class="serial">
              01
            </div>
            <div class="country">
              Erythrocyte count
            </div>
            <div class="visit">
              Male: 4.3 − 5.9 · 1012/L<br>
              Female: 3.5 − 5.5 · 1012/L
            </div>
          </div>
          <div class="table-row">
            <div class="serial">
              02
            </div>
            <div class="country">
              Hemoglobin, blood
            </div>
            <div class="visit">
              Male: 135-175 g/L<br>
              Female: 120-160 g/L
            </div>
          </div>
          <div class="table-row">
            <div class="serial">
              03
            </div>
            <div class="country">
              Color index
            </div>
            <div class="visit">
              0.85 - 1.05
            </div>
          </div>
          <div class="table-row">
            <div class="serial">
              04
            </div>
            <div class="country">
              Reticulocyte count
            </div>
            <div class="visit">
              0.5 - 1.5%
            </div>
          </div>
          <div class="table-row">
            <div class="serial">
              05
            </div>
            <div class="country">
              Platelet count
            </div>
            <div class="visit">
              150 − 400 · 109/L
            </div>
          </div>
          <div class="table-row">
            <div class="serial">
              06
            </div>
            <div class="country">
              Leukocyte count
            </div>
            <div class="visit">
              4.0 − 9.0 · 109/L
            </div>
          </div>
          <div class="table-row">
            <div class="serial">
              07
            </div>
            <div class="country">
              Basophils
            </div>
            <div class="visit">
              0 − 0.065 · 109/L (0-1%)
            </div>
          </div>
          <div class="table-row">
            <div class="serial">
              08
            </div>
            <div class="country">
              Eosinophils
            </div>
            <div class="visit">
              0.02 − 0.30 · 109/L (0.5 - 5.0%)
            </div>
          </div>
          <div class="table-row">
            <div class="serial">
              09
            </div>
            <div class="country">
              Band neutrophils
            </div>
            <div class="visit">
              0.04 − 0.30 · 109/L (1 - 6%)
            </div>
          </div>
          <div class="table-row">
            <div class="serial">
              10
            </div>
            <div class="country">
              Segmented neutrophils
            </div>
            <div class="visit">
              2.0 − 5.50 · 109/L (47 - 72%)
            </div>
          </div>
          <div class="table-row">
            <div class="serial">
              11
            </div>
            <div class="country">
              Monocytes
            </div>
            <div class="visit">
              0.09 − 0.60 · 109/L (3 - 11%)
            </div>
          </div>
          <div class="table-row">
            <div class="serial">
              12
            </div>
            <div class="country">
              Lymphocytes
            </div>
            <div class="visit">
              1.2 − 3.0 · 109/L (19 - 37%)
            </div>
          </div>
          <div class="table-row">
            <div class="serial">
              13
            </div>
            <div class="country">
              Erythrocyte sedimentation rate
              (ESR)
            </div>
            <div class="visit">
              Male: 0 - 15 mm/h <br>
              Female: 0 - 20 mm/h
            </div>
          </div>
          <div class="table-row">
            <div class="serial">
              14
            </div>
            <div class="country">
              Hematocrit
            </div>
            <div class="visit">
              Male: 41 - 53% <br>
              Female: 36 - 46%
            </div>
          </div>
        </div>
      </div>
    </div>

    <h3 class="mb-20">
      List of abbreviations
    </h3>
    <ul class="unordered-list">
      <li>ACTH => Adrenocorticotrophic hormone</li>
      <li>ADP => Adenosine diphosphate</li>
      <li>ALT => ALAT Alanin aminotranspherase</li>
      <li>ALV => Artificial lung ventilation</li>
      <li>AP => Arterial (blood) pressure</li>
      <li>AST => AspAT Aspartat aminotranspherase</li>
      <li>ATP => Adenosine triphosphate</li>
      <li>ВСG => Bacillus Calmette-Guérin</li>
      <li>BP => Blood (arterial) pressure</li>
      <li>CK => Creatine kinase</li>
      <li>CNS => Central nervous system</li>
      <li>СоА => Coenzyme A</li>
      <li>CRP => C-reactive protein</li>
      <li>CT => Computed tomography</li>
      <li>COX => Cyclooxygenase</li>
      <li>DIC => Disseminated intravascular coagulation</li>
      <li>DTP => (DPT) Diphtheria-tetanus-pertussis vaccine</li>
      <li>EDTA => Ethylenediamine tetra-acetic acid</li>
      <li>ELISA => Enzyme-linked immunosorbent assay</li>
      <li>ENT => Ear, nose, and throat (as a department in a hospital)</li>
      <li>EPR => (ER) Endoplasmic reticulum</li>
      <li>ESR => Erythrocyte sedimentation rate</li>
      <li>EV => Enterovirus</li>
      <li>FC => Functional class</li>
      <li>GABA => Gamma aminobutyric acid</li>
      <li>Hct => Ht Hematocrit</li>
      <li>HDL => High-density lipoproteins</li>
      <li>HR => Heart rate</li>
      <li>IDL => Intermediate-density lipoproteins</li>
      <li>IU => International unit</li>
      <li>IUPAC => International Union of Pure and Applied Chemistry</li>
      <li>LDH => Lactate dehydrogenase</li>
      <li>LDL => Low-density lipoproteins</li>
      <li>LOX => Lipoxygenase</li>
      <li>MAO => Monoamine oxidase</li>
      <li>MRI => Magnetic resonance imaging</li>
      <li>NSAID => Nonsteroidal anti-inflammatory drug</li>
      <li>PE => (PATE) Pulmonary embolism (Pulmonary artery thromboembolism)</li>
      <li>PSA => Prostate-specific antigen</li>
      <li>RBC => Red blood count</li>
      <li>RR => Respiratory rate</li>
      <li>SES => Sanitary-and-epidemiologic station</li>
      <li>STD => Sexually transmitted disease</li>
      <li>STI => Sexually transmitted infection</li>
      <li>T/l => Trillion/liter</li>
      <li>TABT => Typhoid-paratyphoid A and B plus tetanus toxoid vaccine</li>
      <li>TMJ => Temporomandibular joint</li>
      <li>TSH => Thyroid-stimulating hormone</li>
      <li>TU => Tuberculin unit</li>
      <li>URTI => Upper respiratory tract infection</li>
      <li>V/f => Vision field</li>
      <li>VLDL => Very-low-density lipoproteins</li>
      <li>WBC => White blood count</li>
      <li>WPW => Wolff-Parkinson-White syndrome</li>
    </ul>
  </div>
</template>

<script>
import krok2Collection from '~/gql/krok2'

const customLabels = {
  first: 'First',
  last: 'Last',
  previous: '<',
  next: '>'
}

export default {
  apollo: {
    krok2Collection: {
      prefetch: true,
      query: krok2Collection
    }
  },
  filters: {
    charIndex (i) {
      return String.fromCharCode(97 + i)
    }
  },
  head: {
    title: 'Krok 2 questions'
  },
  data () {
    return {
      pageOfItems: [],
      customLabels,
      pageCount: '1'
    }
  },

  methods: {
    shuffle (a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
      }
      return a
    },

    onChangePage (pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems
      // document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin-bottom: 1rem;
  width: 20rem;
  padding: 1.5rem;
  font-size: 1.8rem;
  border: none;
  box-shadow: 0 0.1rem 1.4rem 0 rgba(86, 185, 235, 0.5);
}

input::placeholder {
  color: #aaa;
}

.choice-container {
  display: flex;
  margin-bottom: 0.5rem;
  width: 100%;
  font-size: 1.8rem;
  border: 0.1rem solid rgba(5, 13, 20, 0.25);
  background-color: white;
}

.choice-container:hover {
  cursor: pointer;
  box-shadow: 0 0.4rem 1.4rem 0 rgba(86, 185, 235, 0.5);
  transform: translateY(-0.1rem);
  transition: transform 150ms;
}

.choice-prefix {
  padding: 0.5rem 2.5rem;
  background-color: #56a5eb;
  color: white;
}

.choice-text {
  padding: 0.5rem;
  width: 100%;
}

.correct {
  background-color: #28a745;
  color: white;
}

.incorrect {
  background-color: #b91626;
  color: white;
}

.progress-table .serial {
  width: 20%;
}

.progress-table .country {
  width: 40%;
}

.progress-table .visit {
  width: 40%;
}
</style>
