var hashMap = [];
hashMap.length = 30;

String.prototype.hashCode = function(){
    var hash = 0;
    if(this.length == 0){
        return hash;
    }
    for(var i=0; i<this.length; i++){
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char;
        hash &= hash;
    }
    return hash;
}
//var hashedKey = 'role'.hashCode();

function mod(input, div){
    return(input % div+div) % div;
}
//var idx = mod(hashedKey, hashMap.length);

function hashInsert (key, value){
    var hashedKey = key.hashCode();
    var idx = mod(hashedKey, hashMap.length);
    console.log(idx);
    if(!hashMap[idx]){
        hashMap[idx] = [];
    }
    for(var i=0; i<hashMap[idx].length; i++){
        if(hashMap[idx][i][0] == key){
            hashMap[idx][i][1] = value;
            console.log('Updated hashMap ', hashMap);
            return;
        }
    }
    hashMap[idx].push([key, value]);
    console.log('Added to hashMap ', hashMap);
}

hashInsert('car','GTR');
hashInsert('car','AE86');
hashInsert('car','RX7');
hashInsert('laptop','Macbook Pro');
hashInsert('laptop','Razer Blade 15');
hashInsert('desktop','iMac');
hashInsert('desktop','Custom Build');