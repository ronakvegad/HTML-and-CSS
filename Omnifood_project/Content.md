# PlatePilot: Project Plan

## 1. Core Idea

A website where users pick their **country/cuisine**, set their **goal**, and get a **personal weekly healthy meal plan** built from that country's local ingredients, with calories and macros shown for every meal.

**One line:** Healthy eating that fits your culture, not a generic diet.

---

## 2. Who It's For

- Busy students and working professionals
- People who want to lose weight, gain muscle, or just eat balanced
- Expats who want healthy food from their home cuisine
- People curious about healthy eating styles from other countries

---

## 3. Website Pages (Sitemap)

| Page                           | What it contains                                                        |
| ------------------------------ | ----------------------------------------------------------------------- |
| **Home**                       | Hero, how it works, featured countries, sample meals, testimonials, CTA |
| **Countries**                  | Grid of countries; click one to open its plan                           |
| **Country Detail**             | Cuisine overview, key healthy ingredients, sample day, calorie range    |
| **Plan Builder**               | Form: country, goal, diet type, allergies, calorie target               |
| **My Plan**                    | 7-day generated meal plan with calories/macros per meal                 |
| **Meal Detail**                | Ingredients, quantity, calories, protein/carbs/fat, steps               |
| **Ingredients Library**        | Searchable list of ingredients with nutrition per 100 g                 |
| **Pricing**                    | Subscription plans (1 or 2 meals/day)                                   |
| **Cities**                     | Delivery availability                                                   |
| **About / FAQ / Contact**      | Story, questions, support form                                          |
| **Login / Signup / Dashboard** | Account, saved plans, progress                                          |

---

## 4. Features

### MVP (build first)

1. Country selector with different plans per country
2. Plan Builder form (goal, diet type, allergies, calories)
3. Auto-generated 7-day meal plan (start rule-based, add AI later)
4. Calorie and macro display per meal and per day
5. Ingredient list with quantity (grams) per meal
6. Swap-a-meal button
7. Responsive design (mobile first)
8. Basic signup/login and save plan

### Phase 2

- BMR/TDEE calorie calculator (auto-suggest daily calories)
- Shopping list generator for the week
- Progress tracker (weight, calories eaten)
- Filter by veg / vegan / non-veg / gluten-free
- Compare two countries' plans side by side

### Phase 3

- AI meal generation (LLM or recommendation model)
- Subscription + payment
- Partner kitchen ordering and delivery tracking
- Photo-based calorie estimate

---

## 5. Goals and Calorie Logic

| Goal        | Daily calories (approx) | Macro split (P/C/F) |
| ----------- | ----------------------- | ------------------- |
| Weight loss | 1,400 to 1,800          | 30 / 40 / 30        |
| Maintain    | 1,900 to 2,300          | 25 / 50 / 25        |
| Muscle gain | 2,500 to 3,000          | 30 / 45 / 25        |

Meal split: Breakfast 25%, Lunch 35%, Snack 10%, Dinner 30%.

_Numbers are general estimates for the project. Add a note that this isn't medical advice._

---

## 6. Country-wise Plans

### India

- **Style:** Balanced, vegetarian-friendly, lots of lentils and veggies
- **Key ingredients:** Moong dal, chana, paneer, curd, millets (ragi, jowar), brown rice, spinach, turmeric, ghee (small)
- **Typical day (~1,800 kcal):**
  - Breakfast: Vegetable poha + curd (~350)
  - Lunch: 2 rotis, dal, sabzi, salad (~600)
  - Snack: Roasted chana + buttermilk (~200)
  - Dinner: Moong dal khichdi + veggies (~500)
- **Note:** Veg, vegan and Jain options

### Italy / Mediterranean

- **Style:** Olive oil, fish, legumes, whole grains
- **Key ingredients:** Olive oil, tomatoes, chickpeas, fish, whole wheat pasta, feta, leafy greens
- **Typical day (~1,900 kcal):**
  - Breakfast: Greek yogurt, honey, nuts (~350)
  - Lunch: Chickpea and veggie salad with olive oil (~600)
  - Snack: Fruit + almonds (~200)
  - Dinner: Grilled fish, roasted veggies, whole wheat pasta (~650)

### Japan

- **Style:** Small portions, fish, fermented foods, rice
- **Key ingredients:** Rice, salmon, tofu, miso, seaweed, edamame, green tea, pickled veggies
- **Typical day (~1,700 kcal):**
  - Breakfast: Miso soup, rice, egg (~400)
  - Lunch: Grilled salmon bowl with veggies (~550)
  - Snack: Edamame (~150)
  - Dinner: Tofu stir-fry, rice, seaweed salad (~550)

### Mexico

- **Style:** Beans, corn, fresh veggies, lean protein
- **Key ingredients:** Black beans, corn tortillas, avocado, tomato, chicken, lime, peppers
- **Typical day (~1,900 kcal):**
  - Breakfast: Veggie egg scramble with tortilla (~400)
  - Lunch: Chicken and black bean burrito bowl (~650)
  - Snack: Guacamole + veggie sticks (~200)
  - Dinner: Grilled fish tacos with cabbage slaw (~550)

### USA

- **Style:** High-protein, flexible, fitness-focused
- **Key ingredients:** Chicken breast, eggs, oats, sweet potato, broccoli, Greek yogurt, peanut butter
- **Typical day (~2,200 kcal):**
  - Breakfast: Oats, banana, peanut butter (~450)
  - Lunch: Grilled chicken, sweet potato, broccoli (~650)
  - Snack: Greek yogurt + berries (~200)
  - Dinner: Salmon, quinoa, green beans (~650)

### Middle East

- **Style:** Legumes, grilled meats, olive oil, fresh herbs
- **Key ingredients:** Hummus, falafel (baked), lentils, tahini, grilled chicken, bulgur, cucumber, dates
- **Typical day (~1,900 kcal):**
  - Breakfast: Whole wheat pita, hummus, cucumber (~350)
  - Lunch: Grilled chicken, tabbouleh, brown rice (~650)
  - Snack: Dates + nuts (~200)
  - Dinner: Lentil soup + salad (~500)

_Start the MVP with 3 countries (India, Mediterranean, Japan), then add the rest._

---

## 7. Data Structure (for the backend)

**Country**
`id, name, cuisine_style, description, flag, key_ingredients[]`

**Ingredient**
`id, name, country_ids[], calories_per_100g, protein, carbs, fat, fiber, tags[] (veg, vegan, gluten-free, allergen)`

**Meal**
`id, name, country_id, meal_type, ingredients[{ingredient_id, grams}], total_calories, protein, carbs, fat, steps, image`

**User**
`id, name, email, country, goal, diet_type, allergies[], daily_calorie_target`

**Plan**
`id, user_id, week_start, days[{day, meals[]}]`

---

## 8. How the Plan Generator Works

1. User picks country, goal, diet type and allergies
2. Calculate daily calorie target (or use the user's input)
3. Filter meals by country, diet type and allergies
4. Pick meals for each slot (breakfast, lunch, snack, dinner) so the daily total is within ±10% of the target
5. Avoid repeating the same meal twice in a row
6. Show totals and let the user swap meals

Later you can replace step 3 to 4 with an ML recommendation model.

---

## 9. Suggested Tech Stack

- **Frontend:** HTML, CSS, JavaScript to start, then React
- **Backend:** Node.js + Express
- **Database:** MongoDB (or PostgreSQL)
- **Nutrition data:** Your own JSON to start; USDA FoodData Central or IFCT (India) for real values later
- **AI (Phase 3):** Python service or LLM API for meal generation

---

## 10. Build Roadmap

| Week | Goal                                                                                         |
| ---- | -------------------------------------------------------------------------------------------- |
| 1    | Finalize design, color palette, wireframes, collect meal and ingredient data for 3 countries |
| 2    | Build static pages: Home, Countries, Country Detail                                          |
| 3    | Plan Builder form + rule-based plan generator (JS)                                           |
| 4    | My Plan page, meal detail, calorie and macro display                                         |
| 5    | Backend, database, login/signup, save plans                                                  |
| 6    | Polish, responsive fixes, deploy                                                             |
| 7+   | AI generation, shopping list, subscription                                                   |

---

## 11. Extra Ideas to Make It Stand Out

- "Eat like a local" weekly challenge for a different country
- Healthy swap suggestions (e.g. white rice → millet)
- Fun facts about each country's food culture
- Calorie comparison chart between countries
- Festival-special healthy plans (Diwali, Christmas, Ramadan)
