// Most powerful hit
// It's constant value
// Damage will be registered based on bee's defence lvl
var hit = 12;

// Main action trigger
var hitTheBee = function() {
    var aliveBees = $('.alive-bee');
    // Count all LIVE bees
    swarmSize = aliveBees.length;

    // math random bee
    var index = Math.floor(Math.random() * swarmSize);
    var targetBee = aliveBees.eq(index);

    // Add classes to animate hit action
    $('.bee').removeClass('hit');
    targetBee.addClass('hit');

    // Define health and defence of the bee
    var health = targetBee.attr('data-health');
    var defence = targetBee.attr('data-defence');

    // Calc health after hit
    // health points - hit constant value - bee defence level = reg. hp after hit
    health -= hit - defence;

    // Actions when bee killed
    if (health <= 0) {
        targetBee.removeClass('alive-bee')
            .addClass('dead-bee')
            .attr('data-health', 0)
            .text(0);

        // If Queen bee ran out of lives, all other bees also become dead
        if (targetBee.hasClass('bee-queen')) {
            aliveBees.removeClass('alive-bee')
                .addClass('dead-bee')
                .attr('data-health', 0)
                .text(0);
        }
    // Register hit amount and update health
    } else {
        targetBee.attr('data-health', health).text(health);
    }

    // Recount alive bees
    aliveBees = $('.alive-bee');
    // Count left alive bees
    swarmSize = aliveBees.length;
    // Set updated count
    $('.bee-count h1').text(swarmSize);

    // If all bees are dead, alert message and restart the game
    if (swarmSize == 0) {
        alert('You Killed all bees!\n All dead!');
        initSwarm();
    }
};

// Hit button, initialize the main action
$('.btn-hit').click(hitTheBee);

// Bees data based on it's rank (queen, worker or drone)
// Defence added as in mmorpg games
var queen = {
    health: 100,
    defence: 4 // 12 max dmg - 4 def = 8 hp taken from queen
};
var worker = {
    health: 75,
    defence: 2 // 12 max dmg - 2 def = 10 hp from worker
};
var drone = {
    health: 50,
    defence: 0 // 12 max dmg, 12 hp taken. No defence
};

// Initialize the whole bees swarm
function initSwarm() {

    // Set all bees alive
    $('.bee').addClass('alive-bee').removeClass('dead-bee');

    // Count bees
    var swarmSize = $('.alive-bee').length;
    // Show bee count
    $('.bee-count h1').text(swarmSize);

    // Set the bee it's attributes and add health to each block
    $('.bee-queen').attr({
        'data-health' : queen.health,
        'data-defence' : queen.defence
    }).text(queen.health);
    $('.bee-worker').attr({
        'data-health' : worker.health,
        'data-defence' : worker.defence
    }).text(worker.health);
    $('.bee-drone').attr({
        'data-health' : drone.health,
        'data-defence' : drone.defence
    }).text(drone.health);
}

// Initialize function
initSwarm();