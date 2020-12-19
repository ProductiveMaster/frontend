<template>
  <div>
    <h1 class="RankingTitle">Ranking</h1>
    <div
      v-for="(user, index) in users"
      :key="user._id"
      class="padding-1 inline-block rankin-item-div"
    >
      <div class="card padding-1 rankin-item">
        <div class="text-big">
          <img
            v-if="index + 1 == 1"
            :src="require('@/assets/img/icons/r1.png')"
            style="width: 60px"
          />
          <img
            v-if="index + 1 == 2"
            :src="require('@/assets/img/icons/r2.png')"
            style="width: 40px"
          />
          <img
            v-if="index + 1 == 3"
            :src="require('@/assets/img/icons/r3.png')"
            style="width: 30px"
          />
          <br />
          {{ index + 1 }}
        </div>
        {{ user.name }} {{ user.lastname }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["usersList", "apply"]),

    users() {
      const usersList = this.usersList.map((user) => {
        const applys = this.apply.filter((apply) => {
          return apply.studentId._id == user._id;
        });

        var average = 0;
        var totalScore = 0;
        var scoresLength = 0;

        console.log(applys);

        applys.forEach((element) => {
          if (element.qualification) {
            totalScore += element.qualification;
            scoresLength++;
          }
        });

        if (totalScore && scoresLength) {
          average = totalScore / scoresLength;
        }

        return {
          ...user,
          average,
        };
      });

      return usersList.sort((a, b) => {
        return b.average - a.average;
      });
    },
  },
  methods: {
    ...mapActions(["getUsers", "getApply"]),
  },
  async created() {
    await this.getUsers();
    await this.getApply();
  },
};
</script>

<style lang="scss">
.text-big {
  font-size: 30px;
  text-align: center;
  margin-bottom: 15px;
}

.rankin-item {
  vertical-align: top;
  display: inline-block;
  height: 170px;
  text-align: center;
}
.RankingTitle {
  font-size: 1.5em;
  margin: 10px 0;
}

@media (max-width: 900px) {
  .rankin-item-div {
    display: block;
    width: 100%;
    .rankin-item {
      width: 100%;
    }
  }
}
</style>