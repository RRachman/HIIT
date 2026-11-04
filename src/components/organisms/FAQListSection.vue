<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  questions: Array<{ question: string; answer: string }>;
}>();

const openIndex = ref<number | null>(0);
</script>

<template>
  <section class="section-spacing page-width content-narrow">
    <header class="faq-heading">
      <p class="page-kicker">HELP &amp; GUIDANCE</p>
      <h1 class="page-title">FREQUENTLY ASKED QUESTIONS.</h1>
    </header>
    <div class="faq-list">
      <article v-for="(item, index) in questions" :key="item.question" class="faq-item">
        <h2>
          <button
            class="faq-trigger"
            type="button"
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
            @click="openIndex = openIndex === index ? null : index"
          >
            <span>{{ item.question }}</span><span aria-hidden="true">{{ openIndex === index ? '−' : '+' }}</span>
          </button>
        </h2>
        <p v-show="openIndex === index" :id="`faq-answer-${index}`" class="faq-answer">
          {{ item.answer }}
        </p>
      </article>
    </div>
  </section>
</template>
