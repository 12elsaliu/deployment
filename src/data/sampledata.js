import React, { Component } from 'react';
import Button from "@atlaskit/button";
import Status from './Status';
import GarbageReason from './GarbageReason';
import Deployment from './Deployment';



const { DateTime } = require("luxon");

function createKey(input) {
  return input ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '') : input;
}

const testData = [
  {
    "deploymentId": "6",
    "createdByAccountId": "655362:f6f664d7-0fa8-40d7-bbe4-950e43ce5fbd",
    "createdAt": "2021-05-17T16:49:08.646Z",
    "status": "DONE",
    "errorDetails": null,
    "markedAsGarbage": null
  },
  {
    "deploymentId": "5",
    "createdByAccountId": "655362:f6f664d7-0fa8-40d7-bbe4-950e43ce5fbd",
    "createdAt": "2021-05-17T16:48:18.857Z",
    "status": "FAILED",
    "errorDetails": {
      "message": "Function key too long",
      "code": "MANIFEST_VALIDATION_FAILED"
    },
    "markedAsGarbage": {
      "reason": "OBSOLETE_DEPLOYMENT",
      "markedAt": "2021-05-17T16:52:52.572Z",
      "collectedAt": null
    }
  },
  {
    "deploymentId": "4",
    "createdByAccountId": "655362:f6f664d7-0fa8-40d7-bbe4-950e43ce5fbd",
    "createdAt": "2021-05-17T16:42:27.722Z",
    "status": "DONE",
    "errorDetails": null,
    "markedAsGarbage": {
      "reason": "OBSOLETE_DEPLOYMENT",
      "markedAt": "2021-05-17T16:52:52.538Z",
      "collectedAt": "2021-05-17T16:52:52.538Z"
    }
  },
  {
    "deploymentId": "3",
    "createdByAccountId": "655362:f6f664d7-0fa8-40d7-bbe4-950e43ce5fbd",
    "createdAt": "2021-05-17T10:30:46.914Z",
    "status": "DONE",
    "errorDetails": null,
    "markedAsGarbage": {
      "reason": "OBSOLETE_APP",
      "markedAt": "2021-05-17T16:52:52.995Z",
      "collectedAt": null
    }
  },
  {
    "deploymentId": "2",
    "createdByAccountId": "655362:f6f664d7-0fa8-40d7-bbe4-950e43ce5fbd",
    "createdAt": "2021-05-17T10:20:18.887Z",
    "status": "DONE",
    "errorDetails": null,
    "markedAsGarbage": null
  },
  {
    "deploymentId": "1",
    "createdByAccountId": "655362:f6f664d7-0fa8-40d7-bbe4-950e43ce5fbd",
    "createdAt": "2021-05-17T10:18:54.072Z",
    "status": "DONE",
    "errorDetails": null,
    "markedAsGarbage": {
      "reason": "OBSOLETE_DEPLOYMENT",
      "markedAt": "2021-05-17T16:52:52.993Z",
      "collectedAt": null
    }
  }
]

export const head = {
  cells: [
    {
      key: 'deploymentId',
      content: 'Deployment ID',
      isSortable: true,
      width: 10,

    },
    {
      key: 'createdAt',
      content: 'Creation Time',
      isSortable: true,
      width: 20,
    },
    {
      key: 'status',
      content: 'Status',
      isSortable: true,
      width: 25,
    },
    {
      key: 'markedAsGarbage_reason',
      content: 'Marked as garbage reason',
      isSortable: true,
      width: 20,
    },
    {
      key: 'markedAsGarbage_markedAt',
      content: 'Marked Time',
      isSortable: true,
      width: 20,
    },
    {
      key: 'markedAsGarbage_collectedAt',
      content: 'Collection Time',
      isSortable: true,
      width: 20,
    },
  ],
};

const transformTime = (time) => {
  const result = DateTime.utc(
    new Date(time).getUTCFullYear(),
    new Date(time).getUTCMonth(),
    new Date(time).getUTCDay(),
    new Date(time).getUTCHours(),
    new Date(time).getUTCMinutes(),
    new Date(time).getUTCSeconds(),
  ).toFormat('yyyy-LL-dd HH:mm:ss')
  return result
}

export const rows = testData.map((row) => {
  let markedAt;
  let collectedAt;

  const markedAtDate = transformTime(row.markedAsGarbage?.markedAt)

  const collectedAtDate = transformTime(row.markedAsGarbage?.collectedAt)

  if (markedAtDate === 'Invalid DateTime') {
    markedAt = ''
  } else {
    markedAt = markedAtDate
  }

  if (collectedAtDate === 'Invalid DateTime') {
    collectedAt = ''
  } else {
    collectedAt = collectedAtDate
  }


  return {
    cells: [
      {
        key: row.deploymentId,
        content: <Deployment deployment={row.deploymentId} creation={row.createdByAccountId} />
      },
      {
        key: row.deploymentId,
        content: transformTime(row.createdAt)
      },
      {
        key: row.deploymentId,
        content: <Status status={row.status} errorDetails={row.errorDetails} position={this} />
      },
      {
        key: row.deploymentId,
        content: <GarbageReason reason={row.markedAsGarbage?.reason} />
      },
      {
        key: row.deploymentId,
        content: markedAt
      },
      {
        key: row.deploymentId,
        content: collectedAt
      }
    ]
  }
})