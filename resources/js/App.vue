<template>
    <div>
		<nav>
	        <router-link to="/">Vehicles</router-link>
    	    <router-link to="/home">Trips</router-link>
		</nav>
        <main>
			<router-view></router-view>
		</main>
    </div>
</template>

<script>
export default {
    name: "App"
}
</script>