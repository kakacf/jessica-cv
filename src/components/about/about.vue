<template> 
	<div>
		<b-container fluid id="id-about" ref="aboutRef">
			<div>
				<h2 class="title" v-once>About</h2>
			</div>

			<div>
				<!-- me -->
				<about-content
					:is-simple-tpl="true"
					:title="me.heading"
					:content="me.content"/>
				<!-- work experiences -->
				<about-content :is-simple-tpl="false" :title="work.heading">
					<div
						class="b-col"
						v-for="(experience, index) in work.experiences"
						:key="index">
						<div class="font-18">
							<span><b>{{ experience.title }}</b> <b class="company"> - {{ experience.company }}</b></span>
						</div>
						<div class="font-16">
							<span>{{ experience.year }}</span>
						</div>
						<div class="font-16" v-for="(content, key, index) in experience.contents" :key="index">
							<span><b>{{ key }}</b>{{ content }}</span>
						</div>
						<hr />
					</div>
						
				</about-content>
				<!-- education -->
				<about-content
					:is-simple-tpl="false"
					:title="education.heading">
					<div class="b-col">
						<div
							v-for="(education, index) in education.educations"
							:key="index">
							<div class="font-18">
								<span><b>{{ education.qualification }} - {{ education.school }}</b></span>
							</div>
							<div class="font-16">
								<span>{{ education.location }} {{ education.year }}</span>
							</div>
							<div class="font-16">
								<span>{{ education.major }}</span>
							</div>
							<hr v-if="!education.courses" />
							
							<div v-if="education.courses" class="font-16">
								<div
									v-for="(course, key, index) in education.courses"
									:key="index">
									<span>{{ key + 1 }}. {{ course }}</span>
								</div>
							</div>
						</div>
					</div>
					<hr />
				</about-content>


				<about-content :is-simple-tpl="false" :title="skill.heading">
					<b-row>
						<b-img-lazy v-for="(name, index) in skill.imageName" :key="index" :src="require(`../../assets/image/skill/${name}.png`)" fluid alt="Fluid image" class="skill-image"></b-img-lazy>

					</b-row>

				</about-content>


			</div>
		</b-container>
	</div>
</template>

<script src="./about.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./about.scss" scoped></style>