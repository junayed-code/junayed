export const emailTemplate = (name: string, email: string, message: string) => `
  <h3>
    This message is sent from 
    <em><a href="mailto:${email}">${email}</a></em>
  </h3>
  <div style="font-size:16px;">
    <p>
      <em><b style="font-size:20px;">"</b></em>
      ${message}
      <em><b style="font-size:20px;">"</b></em>
    </p>
    <p>Thanks,<br/> <em>${name}</em></p>
  </div>
`;
