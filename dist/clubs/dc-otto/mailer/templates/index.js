"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembershipInquiryResponseTemplate = exports.MembershipInquiryTemplate = exports.WelcomeEmailTemplate = exports.NewProviderTemplate = exports.OttoMembershipApplicationTemplate = exports.DcMembershipApplicationTemplate = exports.ServiceRequestTemplate = exports.UnRsvpTemplate = exports.PublicRsvpTemplate = exports.RsvpTemplate = void 0;
const core = require("club-hub-core");
const ts_optchain_1 = require("ts-optchain");
const welcomeEmailTemplate = (member, club, invitation) => {
    const supportEmail = (club.name === core.Constants.Clubs.DRIVERS_CLUB) ? 'info@drivers.club' : 'info@otto.club';
    const message = `
		<p>Hi ${member.firstName} and welcome to ${club.name}!

		<p>Your new ${club.name} account has been created. This gives you access to the ${club.name} web and mobile apps!</p>

		<p>Please follow the url: ${invitation.inviteURL} to create your password using your email: ${member.email}.</p>
			
		<p>Please send an email to ${supportEmail} if you have any questions!</p>

		<p>Best,</p> 

		<p>The ${club.name} team.</p>
	`;
    return message;
};
exports.WelcomeEmailTemplate = welcomeEmailTemplate;
const dcMembershipApplicationTemplate = (memberInfo, club) => {
    const message = `
		<p> Hi there!</p>

		<p>A prospective member has completed the new member request form. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Member Info</p>
		<ul>
			<li>
				${bulletLine('Name:', memberInfo.name)}
			</li>
			<li>
				${bulletLine('Company', memberInfo.company)}
			</li>
			<li>
				${bulletLine('Address', memberInfo.address)}
			</li>
			<li>
				${bulletLine('Address', memberInfo.addressTwo)}
			</li>
			<li>
				${bulletLine('Address', `${memberInfo.city} ${memberInfo.state.label} ${memberInfo.zip}`)}
			</li>
			<li>
				${bulletLine('Email', memberInfo.email)}
			</li>
			<li>
				${bulletLine('Phone', memberInfo.phoneNumber)}
			</li>
			<li>
				${bulletLine('Social', memberInfo.socialMedia)}
			</li>
			<li>
				${bulletLine('Automotive Passion', memberInfo.automotivePassion)}
			</li>
			<li>
				${bulletLine('Referral', memberInfo.referral)}
			</li>
			<li>
				${bulletLine('Car Showcase', memberInfo.carShowcase)}
			</li>
			<li>
				${bulletLine('Plan', memberInfo.membershipPlan)}
			</li>
			<li>
				${bulletLine('Membership Type', `${memberInfo.membershipType.label}`)}
			</li>
		</ul>

		<p>Thanks,</p>

		<p>Your friends at ${club.name}</p>
	`;
    return message;
};
exports.DcMembershipApplicationTemplate = dcMembershipApplicationTemplate;
const ottoMembershipApplicationTemplate = (memberInfo, club) => {
    const fullName = `${memberInfo.firstName} ${memberInfo.middleName} ${memberInfo.lastName}`;
    const message = `
		<p> Hi there!</p>

		<p>A prospective member has completed the new member request form. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Member Info</p>
		<ul>
			<li>
				${bulletLine('Name:', fullName)}
			</li>
			<li>
				${bulletLine('Email', memberInfo.email)}
			</li>
			<li>
				${bulletLine('Address', memberInfo.address)}
			</li>
			<li>
				${bulletLine('Address', `${memberInfo.city} ${memberInfo.state.label} ${memberInfo.zip}`)}
			</li>
			<li>
				${bulletLine('Phone', memberInfo.phoneNumber)}
			</li>
			<li>
				${bulletLine('Occupation', memberInfo.occupation)}
			</li>
			<li>
				${bulletLine('Birthday', memberInfo.birthday)}
			</li>
			<li>
				${bulletLine('Gender', memberInfo.gender.label)}
			</li>
			<li>
				${bulletLine('Automotive Passion', memberInfo.automotivePassion)}
			</li>
			<li>
				${bulletLine('Referral', memberInfo.referral)}
			</li>
			<li>
				${bulletLine('Car Showcase', memberInfo.carShowcase)}
			</li>
			<li>
				${bulletLine('Hobbies', memberInfo.freeTime)}
			</li>
			<li>
				${bulletLine('Other Clubs', memberInfo.otherClubs)}
			</li>
			<li>
				${bulletLine('Membership Type', `${memberInfo.membershipType.label}`)}
			</li>
			<li>
				${bulletLine('Additional Information', `${memberInfo.other}`)}
			</li>
		</ul>

		<p>Thanks,</p>

		<p>Your friends at ${club.name}</p>
	`;
    return message;
};
exports.OttoMembershipApplicationTemplate = ottoMembershipApplicationTemplate;
const membershipInquiryTemplate = (memberInfo, club) => {
    const message = `
		<p> Hi there!</p>

		<p>A prospective member has completed the membership inquiry form. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Member Info</p>
		<ul>
			<li>
				${bulletLine('Name:', `${memberInfo.firstName} ${memberInfo.lastName}`)}
			</li>
			<li>
				${bulletLine('Email', memberInfo.email)}
			</li>
			<li>
				${bulletLine('Desired Membership', memberInfo.membership.label)}
			</li>
		</ul>

		<p>Thanks,</p>

		<p>Your friends at ${club.name}</p>
	`;
    return message;
};
exports.MembershipInquiryTemplate = membershipInquiryTemplate;
const membershipInquiryResponseTemplate = (memberFormInfo, club, url) => {
    const applicationURL = `${club.baseURL}/forms/application`;
    const message = `
		<p>Dear ${memberFormInfo.firstName},</p>

		<p>Thank you for contacting WAREHOUSE about a club membership! </p>

		<p>We would like to learn more about your passion for cars and get to know you through our application process.</p>

		<p>Please follow <a href="${applicationURL}">this link</a> to our application questionnaire and fill it out with as much detail as possible. </p>

		<p>Thank you for your interest in WAREHOUSE, we will reach out to you shortly to discuss more details.</p>

		<p>Sincerely,</p>

		<p>Nate Hedrick</p>

		<p>Director of Membership Experience </p>
	`;
    return message;
};
exports.MembershipInquiryResponseTemplate = membershipInquiryResponseTemplate;
const rsvpTemplate = (member, event, club) => {
    const fullName = `${member.firstName} ${member.lastName}`;
    let numberContactLine = '';
    if (member.phoneNumbers && member.phoneNumbers.length) {
        numberContactLine =
            `
		<li>
			${bulletLine('Phone:', ts_optchain_1.oc(member).phoneNumbers([{}])[0].number)}
		</li>
	`;
    }
    const message = `
		<p> Hi there!</p>

		<p>A Club member has RSVP'd to an event. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Member Info</p>
		<ul>
			<li>
				${bulletLine('Name:', fullName)}
			</li>
			<li>
				${bulletLine('Email:', member.email)}
			</li>
			${numberContactLine}
		</ul>

		<p style='font-weight:bold; display:inline;'>Event Info</p>
		<ul>
			<li>
				${bulletLine('Event:', event.name)}
			</li>
			<li>
				${bulletLine('ID', event._id.toString())}
			</li>
		</ul>
			
		<p>Thanks,</p>

		<p>Your friends at ${club.name}</p>
	`;
    return message;
};
exports.RsvpTemplate = rsvpTemplate;
const unRsvpTemplate = (member, event, club) => {
    const fullName = `${member.firstName} ${member.lastName}`;
    const eventPrice = (event.price) ? event.price.toString() : 'Free';
    const message = `
		<p> Hi there!</p>

		<p>A Club member has cancelled their RSVP to an event. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Member Info</p>
		<ul>
			<li>
				${bulletLine('Name:', fullName)}
			</li>
			<li>
				${bulletLine('Email:', member.email)}
			</li>
			<li>
				${bulletLine('Phone:', ts_optchain_1.oc(member).phoneNumbers([{}])[0].number)}
			</li>
		</ul>

		<p style='font-weight:bold; display:inline;'>Event Info</p>
		<ul>
			<li>
				${bulletLine('Event:', event.name)}
			</li>
			<li>
				${bulletLine('Price', eventPrice)}
			</li>
			<li>
				${bulletLine('ID', event._id.toString())}
			</li>
		</ul>
			
		<p>Thanks,</p>

		<p>Your friends at ${club.name}</p>
	`;
    return message;
};
exports.UnRsvpTemplate = unRsvpTemplate;
const publicRsvpTemplate = (event, memberInfo, club) => {
    const fullName = `${memberInfo.firstName} ${memberInfo.lastName}`;
    const plusOneText = memberInfo.plusOne ? 'Yes' : 'No';
    const eventPrice = (event.price) ? event.price.toString() : 'Free';
    const message = `
		<p> Hi there!</p>

		<p>A public person has RSVP'd to an event. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Member Info</p>
		<ul>
			<li>
				${bulletLine('Name:', fullName)}
			</li>
			<li>
				${bulletLine('Email:', memberInfo.email)}
			</li>
			<li>
				${bulletLine('Plus One:', plusOneText)}
			</li>
		</ul>

		<p style='font-weight:bold; display:inline;'>Event Info</p>
		<ul>
			<li>
				${bulletLine('Event:', event.name)}
			</li>
			<li>
				${bulletLine('Price', eventPrice)}
			</li>
			<li>
				${linkLine('Event', event.shortLink, club)}
			</li>
		</ul>
			
		<p>Thanks,</p>

		<p>Your friends at ${club.name}</p>
	`;
    return message;
};
exports.PublicRsvpTemplate = publicRsvpTemplate;
const serviceRequestTemplate = (member, provider, event, reservation, club) => {
    const fullName = `${member.firstName} ${member.lastName}`;
    const reservationMeta = reservation.meta;
    const vehicle = member.meta.car.vehicles.find((vehicle) => vehicle._id.toString() === reservationMeta.vehicleID.toString());
    const dateOpts = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: club.tzid };
    const date = new Date(event.start).toLocaleDateString('en-US', dateOpts);
    const message = `
		<p> Hi there!</p>

		<p>A Club member has submitted a new service request. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Provider Info</p>
		<ul>
			<li>
				${bulletLine('Name:', provider.name)}
			</li>
			<li>
				${bulletLine('Email', provider.location.email)}
			</li>
			<li>
				${bulletLine('Phone', provider.location.phone)}
			</li>
		</ul>

		<p style='font-weight:bold; display:inline;'>Member Info</p>
		<ul>
			<li>
				${bulletLine('Name:', fullName)}
			</li>
			<li>
				${bulletLine('Email', member.email)}
			</li>
			<li>
				${bulletLine('Phone', ts_optchain_1.oc(member).phoneNumbers([{}])[0].number)}
			</li>
		</ul>

		<p style='font-weight:bold; display:inline;'>Service Info</p>
		<ul>
			<li>
				${bulletLine('Vehicle:', vehicle.model)}
			</li>
			<li>
				${bulletLine('Date', date.toString())}
			</li>
			<li>
				${bulletLine('Notes', ts_optchain_1.oc(reservation).meta.notes())}
			</li>
			<li>
				${bulletLine('Key Spot', ts_optchain_1.oc(vehicle).keySpots())}
			</li>
			<li>
				${bulletLine('Stall Numbers', ts_optchain_1.oc(member).meta.car.stallNumbers())}
			</li>
		</ul>
			
		<p>Thanks,</p>

		<p>Your friends at ${club.name}</p>
	`;
    return message;
};
exports.ServiceRequestTemplate = serviceRequestTemplate;
const newProviderTemplate = (providerInfo, club) => {
    const message = `
		<p> Hi there!</p>

		<p>A member has submitted a request to add a new ${club.name} provider. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Provider Info</p>
		<ul>
			<li>
				${bulletLine('Name:', providerInfo.name)}
			</li>
			<li>
				${bulletLine('Contact', providerInfo.contactName)}
			</li>
			<li>
				${bulletLine('Email', providerInfo.email)}
			</li>
			<li>
				${bulletLine('Phone', providerInfo.phone)}
			</li>
			<li>
				${bulletLine('Website', providerInfo.website)}
			</li>
			<li>
				${bulletLine('Street', providerInfo.address1)}
			</li>
			<li>
				${bulletLine('City', providerInfo.city)}
			</li>
			<li>
				${bulletLine('State', providerInfo.state.label)}
			</li>
			<li>
				${bulletLine('Zip', providerInfo.zip)}
			</li>
		</ul>

		<p>Thanks,</p>

		<p>Your friends at ${club.name}</p>
	`;
    return message;
};
exports.NewProviderTemplate = newProviderTemplate;
const bulletLine = (boldText, text) => {
    return `<p style='font-weight:bold; display:inline;'>${boldText}</p> <p style='display:inline;'>${text}</p>`;
};
const linkLine = (boldText, shortLink, club) => {
    return `<p style='font-weight:bold; display:inline;'>${boldText}</p> <a href="${club.baseURL}/event/${shortLink}" style='display:inline;'>Event Link</a>`;
};
const regularText = (text) => {
    return `<p>${text}</p>`;
};
