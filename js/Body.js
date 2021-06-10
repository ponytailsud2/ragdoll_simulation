class Body{
    constructor(mass, radius, position, force, id){
        this.id = id || "Unknown";
        this.mass = mass || 0;
        this.radius = radius || 1;
        this.position = position || new THREE.vector3();
        this.force = force || new THREE.vector3();
        this.geometry = new THREE.SphereGeometry(radius,10,10);
        this.material = new THREE.MeshLambertMaterial({color:0xFF0000});
        this.mesh = new THREE.Mesh(geometry,material);
    }
    update(){
        if(!this.force.equals(new THREE.vector3())){
            
        }
    }
}